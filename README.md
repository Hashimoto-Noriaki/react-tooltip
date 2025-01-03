```
npm run dev
```

Tooltip（ツールチップ）は、ユーザーインターフェース（UI）において、要素（例えば、ボタンやリンク）にマウスオーバーした際に表示される小さな補足情報のことです。主に、ボタンやアイコンなどに対して、ユーザーがその要素の機能や目的を理解するためのヒントや説明を提供するために使用される。

1. 補足情報の表示: ボタンやアイコンにマウスオーバーすると、その要素が何をするものなのか、または追加情報を簡潔に表示
2. 自動非表示: ツールチップは、ユーザーが要素からマウスを離すと、自動的に非表示
3. 見た目がシンプル: 通常、ツールチップは小さなポップアップで、矢印がついていて、要素とツールチップの間に関連を示す

- アイコンボタン: アイコンだけのボタンがある場合、そのボタンが何をするのか分からないことがあります。このとき、ツールチップに説明を追加することで、ボタンの機能を直感的に理解できる
- フォームフィールド: ユーザーが入力を始める前に、フィールドにマウスオーバーすると補足情報を表示することで、入力方法や期待されるフォーマットについて説明できる

実際の使い方（例）
例えば、以下のようなボタンにツールチップを追加する場合：

ツールチップなし:
ボタンに「ハート」アイコンがあり、何をするボタンか分からない。
ツールチップあり:
ボタンにマウスオーバーすると「お気に入りに追加」などのメッセージが表示され、ユーザーがそのボタンの機能を理解できる。

```tsx
import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const MyButton: React.FC = () => {
  return (
    <Tooltip title="Click to add to favorites" arrow>
      <button>♥</button>
    </Tooltip>
  );
};

export default MyButton;
```
