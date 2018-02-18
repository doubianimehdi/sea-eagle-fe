# *Sea Eagle Frontend* - Chest X-ray Classification App
## React/TypeScript/Redux/Webpack frontend code for the Sea Eagle chest x-ray diagnosis app

## What is Sea Eagle?

Sea Eagle is a web application which enables users to upload chest x-rays and receive a predicted diagnosis for the following 15 conditions:

- Hernia
- Pneumonia
- Fibrosis
- Edema
- Emphysema
- Cardiomegaly
- Pleural Thickening
- Consolidation
- Pneumothorax
- Mass
- Nodule
- Atelectasis
- Effusion
- Infiltration

---

## Architecture

Sea Eagle uses a prediction model pretrained with Python using *Keras* and *TensorFlow* running on an *NVIDIA* GPU. The model file is then deployed into a *Flask* web server so that images can be classified by HTTP POSTing them to a ReST endpoint provided by Flask. Finally, a frontend web application (this repository) is used as a gateway to the Flask server to make this process easy for non-technical users.

## Dependencies

- yarn (https://yarnpkg.com/en/docs/install)

## Installation
- project optimized to use yarn
```
// Clone repo
git clone https://github.com/henrywarhurst/sea-eagle-fe

// Install dependencies
yarn

// Run development server with react hot-reload
yarn run dev
```

---

## Thanks

Thanks goes to @piotrwitek for providing the frontend boilerplate for this application (https://github.com/piotrwitek/react-redux-typescript-webpack-starter).
