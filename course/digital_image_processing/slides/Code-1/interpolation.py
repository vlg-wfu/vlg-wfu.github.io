import cv2


orig=cv2.imread('clock_1250_dpi.tif',flags=cv2.IMREAD_GRAYSCALE)
cv2.namedWindow('original',1)
cv2.imshow('original',orig)
cv2.waitKey(0)

h,w=orig.shape
print('height: ',h,'\n'
      'width: ',w)

img_down=cv2.resize(orig,dsize=(162,213),interpolation=cv2.INTER_NEAREST)
img_down_up=cv2.resize(img_down,dsize=(w,h),interpolation=cv2.INTER_NEAREST)
cv2.namedWindow('downsample',1)
cv2.imshow('downsample',img_down)
cv2.waitKey(0)
cv2.namedWindow('downup',1)
cv2.imshow('downup',img_down_up)
cv2.waitKey(0)

cv2.destroyAllWindows()
# cv2.cvtColor(img,cv2.COLOR_BGR2RGB)