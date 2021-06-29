#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Jun 28 23:28:48 2021

@author: Shrihari
"""

import cv2
import os
import time
import uuid

IMAGES_PATH = 'Tensorflow/workspace/images/collectedimages'

labels = ['hello', 'thanks', 'yes', 'no', 'iloveyou', 'iam', 'who', 'machine', 'learning', 'cool', 'life', 'dinner', 'he', 'name', 'bored']

num_imgs = 10
label = labels[14]
path = '~/Desktop/SignLanguageDetection/Tensorflow/workspace/images/collectedimages/'+label
os.system('mkdir '+path)
cap = cv2.VideoCapture(0)
print('Collecting images for {}'.format(label))
time.sleep(5)
for imgnum in range(num_imgs):
    ret, frame = cap.read()
    imagename = os.path.join(IMAGES_PATH, label, label+'.'+'{}.jpg'.format(str(uuid.uuid1())))
    cv2.imwrite(imagename, frame)
    cv2.imshow('frame', frame)
    time.sleep(3)
    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
