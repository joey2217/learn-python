class Student(object):
    def __init__(self, name, gender):
        self._name = name
        self._gender = gender
    def set_gender(self,gender):
        self._gender = gender
    def get_gender(self):
        return self._gender
# 测试:
bart = Student('Bart', 'male')
if bart.get_gender() != 'male':
    print('fail!')
else:
    bart.set_gender('female')
    if bart.get_gender() != 'female':
        print('fail!')
    else:
        print('success!')