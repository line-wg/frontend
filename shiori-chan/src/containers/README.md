# containers

## 責務

- 画面の構成を表現する
    - 画面内に配置するComponentを定義する・・・画面内に配置するComponentを定義する
    - 画面内に配置するComponentを定義する・・・画面内に配置するComponentを定義する
    - 画面内で共通の処理を定義する・・・methodsを見れば共通のロジックが分かる
    - Component間のイベントパスになる・・・子ComponentAのイベントをトリガーに子ComponentBの状態を変える
- 他画面との関係性を表現する
    - 画面同士でデータや状態のやりとりを行う
    - ルーティング処理を定義する
    - vue-routerがurlと紐付けるコンポーネントとなる

## 補足

routerで切り替わるのがContainer  
主に画面:Container=1:1