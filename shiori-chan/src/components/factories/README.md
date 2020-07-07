# factories

表示するComponentを動的に切り替える機能を持つ

## 責務

- propsでtypeを受け取る
- v-bind:isを使ってtypeに応じたComponentをレンダリングする
- 描画するComponentたちのpropsを抽象化する

## 補足

template
```html
<component :is="componentName" :componentData="componentData" />
```

script
```javascript
export default {
  props: { type: String, componentData: Object },
  components: { componentA, componentB },
  computed: {
    componentName() {
      switch(this.type) {
        case 'A':
          return 'component-a';
        case 'B':
        default:
          return 'component-b';
      }
    }
  }
}
```