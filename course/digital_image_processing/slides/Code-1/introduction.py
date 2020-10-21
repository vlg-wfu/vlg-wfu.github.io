
# # 1. print()
# print("Hello world!")
#
# myString='Hello world!'
# print(myString)
#
# # %s string, %d integer, %f float
# print("%s is %d years old." % ("李书豪",26))
#
# # redirect
# logFile=open('myLogFile.txt','a',encoding='utf-8')
# print("python让程序员的工作更轻松",end="\n", file=logFile)
# logFile.close()


# # 2.input
# userName = input("Please input your name:")


# # 3. Operator
# # arithmetic operator
# # + - * / //integer %reminder  **square
# print('7/2: ',7/2,'\n'
#       '7//2: ',7//2,'\n'
#       '7%2: ',7%2,'\n'
#       '4**2: ',4**2)
#
# # compare operator
# # < <= > >= == !=
# print('5>3: ',5 > 3)
# print('5<3: ',5 < 3)
# print('5!=3: ', 5 != 3)
# print('5==3: ',5 == 3)
#
# # logic operator
# # and or not
# print('5>3 and 5<6: ',5>3 and 5<6)
# print('5>3 or 3>5: ',5>3 or 3>5)
# print('not(5>3): ',not(5>3))


# # 4. assignment and data type
# a = 3
# name = 'Jim'
# b = a
# print('b = ',b)
# a += 1
# print('a = ',a)
# print('b = ',b)

# # list, tuple, dictionary
# x = [1, 2, 3]
# print(x)
# x[0] = 5
# print(x)
#
# y = (1, 2, 3)
# print(y)
# # y[0] = 5
# # print(y)
#
# dic={'name':'Lecun','age':26, 'job':'teacher'}
# for value in dic.values():
#     print(value)
#
# for key in dic.keys():
#     print(dic[key])
#
# for key,value in dic.items():
#     print(key,':',value)


# # 5. Slice
# # index starts from 0
# a = 'I like python!'
# print(a[0])
# print(a[-1])


# # 6. some statement
# # if
# a = 3
# if a == 2:
#     print('a equals 2')
# elif a == 4:
#     print('a equals 4')
# else:
#     print('a equals others except 2 and 4')
#
# # for
# for i in range(5):
#     print(i)
#
# # while
# x=0
# while x < 5:
#     print(x)
#     x += 1


# 7. try - except, raise
# a = 10
# b = 0
# c = a/b
# print('done!')


# a = 10
# b = 0
# try:
#     c = a/b
#     print(c)
# except ZeroDivisionError as e:
#     print(e)
# print('done!')


# a = 10.0
# if type(a) != type(1):
#     raise Exception('type of a is not integer')


# 8. function
# def add(a,b):
#     c = a+b
#     return c
#
# z = add(3,10)
# print(z)


# some image processing modules(libraries)
import numpy as np
import cv2
import matplotlib.pyplot as plt

# 1-D array
x=np.array([1,2,3])
print(x)

# 2-D array
y=np.array([[1,2,3],
            [4,5,6],
            [7,8,9]])
print(y)

# numpy.arange
z = np.arange(6)
print(z)
z=z.reshape(2,-1)
print(z)

# cv2 read image
img = cv2.imread('lena.jpg')
img = cv2.resize(img,(0,0),fx=0.3,fy=0.3)
cv2.namedWindow('Lena')
cv2.imshow('Lena',img)
cv2.waitKey(0)
cv2.destroyWindow('Lena')
# plt.imshow(img)
# plt.show()


# matplotlib.pylot
x = np.linspace(-2*np.pi,2*np.pi,256,endpoint=True)
c,s = np.cos(x),np.sin(x)
ax = plt.subplot()
ax.plot(x,c,label='$cosx$')
ax.plot(x,s,label='$sinx$')
ax.legend(loc='upper right')
ax.set_xlim(-2*np.pi-1,2*np.pi+3)
ax.set_xticks([-2*np.pi,-np.pi,0,np.pi,2*np.pi])
ax.set_xticklabels(['$-2\pi$','$-\pi$','$0$','$\pi$','$2\pi$'])
ax.set_title('trigonometric functions')
ax.set_xlabel('x_coordinate')
ax.set_ylabel('y_coordinate')
plt.show()

