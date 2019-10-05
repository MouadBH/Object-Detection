# Object-Detection
Sponsored By Mint tea.

### In-browser real-time object detection with TensorFlow.js and React
This repo contains the code needed to build an object detection web app using TensorFlow.js and React. The app, uses the computer's webcam stream to perform real-time object detections in every frame it receives.

### The model
The model featured in the app, is a pre-trained [COCO SSD](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) system.

### Instructions
To launch the web app, go to the root directory of the app, and run `node server.js`.Do not forget to install node dependencies using `npm install`.

Once the server is up and running, open your browser, and go to http://localhost:8080/, and you'll be greeted by a prompt window requesting permission to access the webcam. Upon accepting said request, wait a bit until the model is downloaded and voila, rejoice with the glory of out-of-the-box deep learning. Have fun and drink tea! 