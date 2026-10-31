"""Voto ponderado didático. Não avalia risco de extinção."""
import csv,json,math
from pathlib import Path
def consenso(rows,limiar=.7):
    assert .5<limiar<=1
    groups={};seen=set()
    for r in rows:
        ident=(r['evidencia'],r['avaliador']);assert ident not in seen,'voto repetido';seen.add(ident)
        weight=float(r['peso']);vote=int(r['voto_presenca'])
        assert math.isfinite(weight) and weight>0 and vote in [0,1]
        groups.setdefault(r['evidencia'],[]).append((weight,vote))
    out={}
    for ident,votes in groups.items():
        score=sum(w*v for w,v in votes)/sum(w for w,v in votes)
        label='presenca' if score>=limiar else 'ausencia' if score<=1-limiar else 'indeterminado'
        out[ident]={'fracao_ponderada':round(score,4),'rotulo_didatico':label,'avaliadores':len(votes)}
    return out
if __name__=='__main__':
    with Path(__file__).with_name('observacoes_demo.csv').open() as f:print(json.dumps(consenso(list(csv.DictReader(f))),ensure_ascii=False,indent=2))
