## Build Setup

``` bash
npm install && npm run dev
```

## Guide
Hosted app: https://up-form.now.sh  (could take some seconds to wait for the container to wake up), you could play with [vue-devtool chrome extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en).

Here [definition.js](https://github.com/pwang2/up-form/blob/master/src/store/definitions.js) is the cleaned schema for form generation.  Something notable is listed here

* `fieldName/name` will be used as the key to save value to. it is the same as `name` field as we see in [pipeline.js](https://github.com/pwang2/up-form/blob/master/src/store/pipeline.js)

* `type` field in definition will be mapped to the form control we use. we have implemented followings.
 see: [_FieldEntry.js#L70](https://github.com/pwang2/up-form/blob/master/src/components/\_FieldEntry.vue#L70)

  | raw           |          map to   |
  | ------------- |:-------------:|
  |EL\_STRING| EL\_SINGLE|
  |EL\_NUMBER| EL\_SINGLE|
  |EL\_TEXT| EL\_SINGLE|
  |EL\_CHARACTER| EL\_SINGLE|
  |FIELD\_SELECTOR| VALUE\_CHOOSER|
  |MULTI\_VALUE\_CHOOSER| VALUE\_CHOOSER|
  |FIELD\_SELECTOR\_MULTI\_VALUE| FIELD\_SELECTOR\_MULTI\_VALUE|
  |EL\_BOOLEAN| EL\_BOOLEAN|
  |EL\_LIST| EL\_LIST|
  |EL\_MAP| EL\_MAP|
  |VALUE\_CHOOSER| VALUE\_CHOOSER

* When type is **MODEL**,  story is fun. It will read the `model` fiedls to generate the form instead.
  see: [executionMode](https://github.com/pwang2/up-form/blob/master/src/store/definitions.js#L4),

* If  `type === 'MODEL' && model.modelType === 'LIST_BEAN'`, party starts!🎉, a recursion worlds started. inception, inception, ...

  ![](https://tse2.mm.bing.net/th?id=OIP.t5Q1d9fdhXYn38IrNyWHIAEsC7&w=273&h=171&c=7&qlt=90&o=4&dpr=2&pid=1.7)

  [ webhookConfigs ](https://github.com/pwang2/up-form/blob/master/src/store/definitions.js#L558) is a great example. You could play on the ui to see how it works. https://up-form.now.sh/

* `dependOn` and ` dependsOnMap` are used to setup the dependeny between setting. we could use it to implement if the dependency has certain value, the dependency will render.
Toggle **Retry Pipeline on Error** to see how it works.
see: [_FieldEntry.vue#L75 ](https://github.com/pwang2/up-form/blob/262476ace7697bcfa03c50027a061faa7546fb23/src/components/_FieldEntry.vue#L75)



<!--
> vim: wrap textwidth=0 wrapmargin=0
-->
