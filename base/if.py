from ast import If, IfExp
from gc import is_finalized
from sre_constants import INFO


height = 1.75
weight = 60
bmi = weight/(height*height)
print('bmi', bmi)
if bmi < 18.5:
    print('过轻')
elif bmi <= 25:
    print('正常')
elif bmi <= 28:
    print('过重')
elif bmi <= 32:
    print('肥胖')
else:
    print('严重肥胖')
