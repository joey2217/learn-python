# def normalize(name):
#     return name[0:1].upper() + name[1:].lower()

# L1 = ['adam', 'LISA', 'barT']
# L2 = list(map(normalize, L1))
# print(L2)
# from functools import reduce
# def prod(L):
#     return reduce(lambda x,y:x*y,L)

# print('3 * 5 * 7 * 9 =', prod([3, 5, 7, 9]))
# if prod([3, 5, 7, 9]) == 945:
#     print('success!')
# else:
#     print('fail!')
from functools import reduce

DIGITS = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,}

def char2num(s):
    return DIGITS[s]

def str2float(s):
    pass
print('str2float(\'123.456\') =', str2float('123.456'))
if abs(str2float('123.456') - 123.456) < 0.00001:
    print('success!')
else:
    print('fail!')