# import cv2
# import numpy as np
# from PIL import Image

# # Paths to the model files
# protoFile = "openpose_models/pose_deploy_linevec.prototxt"
# weightsFile = "openpose_models/pose_iter_440000.caffemodel"

# # Load OpenPose model
# net = cv2.dnn.readNetFromCaffe(protoFile, weightsFile)

# def detect_keypoints(image_path):
#     image = cv2.imread(image_path)
#     inWidth = 368
#     inHeight = 368
#     inpBlob = cv2.dnn.blobFromImage(image, 1.0 / 255, (inWidth, inHeight), (0, 0, 0), swapRB=False, crop=False)
#     net.setInput(inpBlob)
#     output = net.forward()
    
#     H, W = output.shape[2], output.shape[3]
#     points = []
#     for i in range(15):  # 15 key points for COCO model
#         probMap = output[0, i, :, :]
#         minVal, prob, minLoc, point = cv2.minMaxLoc(probMap)
#         x = (image.shape[1] * point[0]) / W
#         y = (image.shape[0] * point[1]) / H
#         if prob > 0.1:
#             points.append((int(x), int(y)))
#         else:
#             points.append(None)
#     return points

# def prepare_garment_image(image_path):
#     garment_image = Image.open(image_path).convert('RGBA')
#     return garment_image

# def align_and_scale_garment(user_image_path, garment_image_path, keypoints):
#     user_image = Image.open(user_image_path).convert('RGBA')
#     garment_image = Image.open(garment_image_path).convert('RGBA')

#     if keypoints[2] and keypoints[5]:
#         shoulder_width = abs(keypoints[2][0] - keypoints[5][0])
#         scale_factor = shoulder_width / garment_image.width
#         new_size = (int(garment_image.width * scale_factor), int(garment_image.height * scale_factor))
#         garment_image = garment_image.resize(new_size, resample=Image.ANTIALIAS)  # Use 'resample' argument

#         garment_x = keypoints[2][0] - garment_image.width // 2
#         garment_y = keypoints[2][1] - garment_image.height // 2
#         user_image.paste(garment_image, (garment_x, garment_y), garment_image)

#     return user_image


# def overlay_garment(user_image_path, garment_image_path, keypoints):
#     user_image = Image.open(user_image_path).convert('RGBA')
#     garment_image = prepare_garment_image(garment_image_path)
#     result_image = align_and_scale_garment(user_image_path, garment_image_path, keypoints)
#     return result_image

# # Example usage
# keypoints = detect_keypoints('user.png')
# print("keypoints identified")
# result = overlay_garment('user.png', 'garment.png', keypoints)
# result.show()

from PIL import Image

def align_and_scale_garment(user_image_path, garment_image_path, keypoints):
    user_image = Image.open(user_image_path).convert('RGBA')
    garment_image = Image.open(garment_image_path).convert('RGBA')

    if keypoints[2] and keypoints[5]:
        shoulder_width = abs(keypoints[2][0] - keypoints[5][0])
        scale_factor = shoulder_width / garment_image.width
        new_size = (int(garment_image.width * scale_factor), int(garment_image.height * scale_factor))
        garment_image = garment_image.resize(new_size, resample=Image.ANTIALIAS)

        garment_x = keypoints[2][0] - garment_image.width // 2
        garment_y = keypoints[2][1] - garment_image.height // 2
        user_image.paste(garment_image, (garment_x, garment_y), garment_image)

    return user_image

# Example usage
# Ensure 'user_photo.jpg' and 'garment_image.png' are valid paths to your images
keypoints = [(100, 200), (150, 250)]  # Replace with actual keypoints
result = align_and_scale_garment('user.png', 'garment.png', keypoints)
result.show()
