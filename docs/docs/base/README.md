# 基础语法

## Python 标识符

- 第一个字符必须是字母或下划线(\_)
- 剩下的字符可以是字母和数字或下划线
- 大小写敏感
- 不能是 Python 的关键字，例如 `def`、`class` 就不能作为标识符

:::tip
以双下划线开头的 `__foo` 代表类的私有成员，以双下划线开头和结尾的 `__foo__` 代表 Python 里特殊方法专用的标识，如 `__init__()` 代表类的构造函数。
:::

## 数据类型

Python3 中有六个标准的数据类型：`Number(数字)、String(字符串)、List(列表)、Tuple(元组)、Sets(集合)、Dictionary(字典)`。

Python3 的六个标准数据类型中：

- 不可变数据(3 个)：`Number(数字)、String(字符串)、Tuple(元组)`；
- 可变数据(3 个)：`List(列表)、Dictionary(字典)、Set(集合)`.

### Number(数字)

Python3 支持 `int、float、bool、complex(复数)`。

Python 支持三种不同的数值类型：

- 整型(`Int`) - 通常被称为是整型或整数，是正或负整数，不带小数点。Python3 整型是没有限制大小的，可以当作 Long 类型使用，所以 Python3 没有 Python2 的 `Long` 类型。
- 浮点型(`float`) - 浮点型由整数部分与小数部分组成，浮点型也可以使用科学计数法表示(`2.5e2 = 2.5 x 10^2 = 250`)
- 复数(`complex`) - 复数由实数部分和虚数部分构成，可以用`a + bj`,或者`complex(a,b)`表示， 复数的实部`a`和虚部`b`都是浮点型。

数字类型转换

- `int(x)` 将`x`转换为一个整数。
- `float(x)` 将`x`转换到一个浮点数。
- `complex(x)` 将`x`转换到一个复数，实数部分为 `x`，虚数部分为 0。
- `complex(x, y)` 将 `x` 和 `y` 转换到一个复数，实数部分为 `x`，虚数部分为 `y`。`x` 和 `y` 是数字表达式。

### String(字符串)

创建字符串可以使用单引号、双引号、三单引号和三双引号，其中三引号可以多行定义字符串

字符串的一些常见操作

```python
s = '学习Python'
# 切片
s[0], s[-1], s[3:], s[::-1] # '学', 'n', 'ython', 'nohtyP习学'
# 替换，还可以使用正则表达式替换
s.replace('Python', 'Java') # '学习Java'
# 查找，find()、index()、rfind()、rindex()
s.find('P') # 3, 返回第一次出现的子串的下标
s.find('h', 2)  # 6, 设定下标2开始查找
s.find('23333') # -1, 查找不到返回-1
s.index('y')  # 4, 返回第一次出现的子串的下标
s.index('P')  # 不同与find(), 查找不到会抛出异常
# 转大小写, upper()、lower()、swapcase()、capitalize()、istitle()、isupper()、islower()
s.upper() # '学习PYTHON'
s.swapcase()  # '学习pYTHON', 大小写互换
s.istitle() # True
s.islower() # False
# 去空格,strip()、lstrip()、rstrip()
# 格式化
s1 = '%s %s' % ('Windrivder', 21)	# 'Windrivder 21' 
s2 = '{}, {}'.format(21, 'Windridver')	# 推荐使用format格式化字符串
s3 = '{0}, {1}, {0}'.format('Windrivder', 21)
s4 = '{name}: {age}'.format(age=21, name='Windrivder')
# 连接与分割，使用 + 连接字符串，每次操作会重新计算、开辟、释放内存，效率很低，所以推荐使用join
l = ['2017', '03', '29', '22:00']
s5 = '-'.join(l)  # '2017-03-29-22:00'
s6 = s5.split('-')  # ['2017', '03', '29', '22:00']
# encode 将字符转换为字节
str = '学习Python'  
print (str.encode())  # 默认编码是 UTF-8  输出：b'\xe5\xad\xa6\xe4\xb9\xa0Python'
print (str.encode('gbk'))      # 输出  b'\xd1\xa7\xcf\xb0Python'
# decode 将字节转换为字符
print (str.encode().decode('utf8'))   # 输出 '学习Python'
print (str.encode('gbk').decode('gbk'))             # 输出 '学习Python'
```

### List(列表)

列表是写在方括号 `[]` 之间、用逗号分隔开的元素列表，列表可以完成大多数集合类的数据结构实现。列表中元素的类型可以不相同，它支持数字，字符串甚至可以包含列表(所谓嵌套)，列表中的元素是可以改变。

```python
Weekday = ['Monday','Tuesday','Wednesday','Thursday','Friday']
print(Weekday[0])   # 输出 Monday
#list 搜索
print(Weekday.index("Wednesday"))
#list 增加元素
Weekday.append("new")
# list 删除
Weekday.remove("Thursday")  
```

### Tuple(元组)

元组(`tuple`)与列表类似，不同之处在于元组的元素不能修改。元组写在小括号 `()` 里，元素之间用逗号隔开，组中的元素类型也可以不相同。

```python
letters = ('a','b','c','d','e','f','g')
print(letters[0])  # 输出 'a'
print(letters[0:3])  # 输出一组 ('a', 'b', 'c')
```

### Sets(集合)

集合(`set`)是一个无序不重复元素的序列，使用大括号 `{}` 或者 `set()` 函数创建集合，注意：创建一个空集合必须用 `set()` 而不是 `{}` ，因为 `{}` 是用来创建一个空字典。

集合不能被切片也不能被索引，除了做集合运算之外，集合元素可以被添加还有删除

```python
a_set = {1,2,3,4}
# 添加
a_set.add(5)
print(a_set)  # 输出{1, 2, 3, 4, 5}
# 删除
a_set.discard(5)
print(a_set)  # 输出{1, 2, 3, 4}
```

### Dictionary(字典)

字典是一种映射类型，它的元素是键值对，字典的关键字必须为不可变类型，且不能重复。创建空字典使用 `{}` 。

```python
Logo_code = {
 'BIDU':'Baidu',
 'SINA':'Sina',
 'YOKU':'Youku'
 }
print(Logo_code)
# 输出{'BIDU': 'Baidu', 'YOKU': 'Youku', 'SINA': 'Sina'}
print (Logo_code['SINA'])       # 输出键为 'one' 的值
print (Logo_code.keys())   # 输出所有键
print (Logo_code.values()) # 输出所有值
print (len(Logo_code))  # 输出字段长度
```

## Python 流程控制

### if 语句

```python
if 判断条件：
    执行语句……
else：
    执行语句……
```

:::tip
可能会有零到多个 `elif` 部分，`else` 是可选的。关键字 `elif` 是 `else if` 的缩写，这个可以有效地避免过深的缩进。`if … elif … elif …` 序列用于替代其它语言中的 `switch` 或 `case` 语句。
:::

### for 循环

Python for 循环可以遍历任何序列的项目，如一个 列表 或者一个 字符串。

```python
'''
for 后跟变量名，in 后跟序列，注意加冒号
for 循环每次从序列中取一个值放到变量中
此处的序列主要指 列表  元组   字符串   文件
'''
for iterating_var in sequence:
   statements(s)
```

```python
for letter in 'Python':     # 第一个实例
   print('当前字母 :', letter)

fruits = ['banana', 'apple',  'mango']
for fruit in fruits:        # 第二个实例
   print('当前水果 :', fruit)
for index in range(len(fruits)):
   print('当前水果 :', fruits[index])
```

### while 循环

```python
while 判断条件：
    执行语句……
```

```python
count = 0
while (count < 9):
   print( 'The count is:', count)
   count = count + 1

count = 0
while count < 5:
   print(count, " is  less than 6")
   count = count + 1
else:
   print(count, " is not less than 6")
```

### `range()` 函数

如果你需要一个数值序列，内置函数 `range()` 会很方便，它生成一个等差级数链表

```python
range (start， end， scan)
# start:计数从 start 开始。默认是从 0 开始。例如 range(5) 等价于 range(0, 5);
# end:计数到 end 结束，但不包括 end.例如：range(0, 5) 是[0, 1, 2, 3, 4]没有 5
# scan：每次跳跃的间距，默认为1。例如：range(0, 5) 等价于 range(0, 5, 1)
```

:::tip
需要迭代链表索引的话，如下所示结合使 用 `range()` 和 `len()`
:::

```python
a = ['i', 'love', 'coding', 'and', 'free']
for i in range(len(a)):
  print(i, a[i])
```

### break 用法

break 语句可以跳出 for 和 while 的循环体。如果你从 for 或 while 循环中终止，任何对应的循环 else 块将不执行。

### continue 用法

continue 语句被用来跳过当前循环块中的剩余语句，然后继续进行下一轮循环。

### pass 语句

Python pass 是空语句，是为了保持程序结构的完整性。它用于那些语法上必须要有什么语句，但程序什么也不做的场合.

## Python 函数

### 定义函数

- 函数代码块以 def 关键词开头，后接函数标识符名称和圆括号()。
- 任何传入参数和自变量必须放在圆括号中间。圆括号之间可以用于定义参数。
- 函数的第一行语句可以选择性地使用文档字符串—用于存放函数说明。
- 函数内容以冒号起始，并且缩进。
- `return [表达式]` 结束函数，选择性地返回一个值给调用方。不带表达式的`return`相当于返回 `None`。

```python
def 函数名（参数列表）:
    函数体
```

### 多个返回值

某些情况下，我们需要一个函数返回多个值，Python 也是支持的。

## Python 模块和包

:::tip

- 模块(`module`)其实就是 py 文件，里面定义了一些函数、类、变量等
- 包(`package`)是多个模块的聚合体形成的文件夹，里面可以是多个 py 文件，也可以嵌套文件夹
- 库是参考其他编程语言的说法，是指完成一定功能的代码集合，在 Python 中的形式就是模块和包
:::

