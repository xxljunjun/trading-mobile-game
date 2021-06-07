# sellgm

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 一、安装项目
+ npm install -g @vue/cli
+ vue create -p dcloudio/uni-preset-vue 你的项目名

# 二、如何将vue/cli项目打包成apk
+ npm run build:app-plus
	生成了dis文件夹
	在dist/build文件夹下在H-build编辑器中进行打包apk

# 三、生成android-apk证书
+ Android平台打包发布apk应用，需要使用数字证书（.keystore文件）进行签名，用于表明开发者身份。
+ 需要安装微信者开发工具
+ 安装JRE环境  //可从Oracle官方下载jre安装包：https://www.oracle.com/technetwork/java/javase/downloads/index.html
+ set PATH=%PATH%;"C:\Program Files\Java\jdk-16.0.1\bin"
+ keytool -genkey -alias yourapp.keystore -keyalg RSA -sigalg SHA1WithRSA -validity 20000 -keysize 1024 -keystore yourapp.keystore -v
+ keytool -importkeystore -srckeystore ./yourapp.keystore -destkeystore ./yourapp.keystore -deststoretype JKS
+ keytool -list -v -keystore ./HBuilder.keystore
***window+R启用管理员权限操作***

# 四、安装sass
+ npm install node-sass@4.14.1 --save-dev
+ npm install sass-loader@8.0.2 --save-dev 
***需要注意版本问题***

# 五、安装上拉加载和下拉刷新组件
+ npm install --save mescroll.js