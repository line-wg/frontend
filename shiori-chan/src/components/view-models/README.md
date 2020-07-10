# view-models

ViewModelの責務を持っている

## 責務

- methodsにコンポーネントを操作するロジックを持つ
- data、computedにコンポーネントのStateを定義する
- data、computedにコンポーネントに必要なModelを定義し、リアクティブに更新する
- Templateにdataやcomputedで定義した値を反映する、またv-model等でTemplateの変更を検知する

## 補足

名前から責務がわかるのが重要  
他のViewModelと見比べた時にその粒度が同程度に見えるか  
基本的にはそれ単体で動く