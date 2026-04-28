# Project1

Project React Native/Expo dung de thuc hanh cac tinh nang co ban:

- Expo Router layout goc
- Bottom Tab Navigator
- Ionicons cho tab bar
- AsyncStorage de luu va doc du lieu local
- FlatList de hien thi danh sach
- React Native Tab View mau trong `components/HomeTabView.tsx`

## Yeu cau

- Node.js
- npm
- Expo CLI thong qua `npx expo`

## Cai dat

```bash
npm install
```

## Chay project

Chay Expo dev server:

```bash
npx expo start
```

Neu can xoa cache Metro:

```bash
npx expo start -c
```

Co the chay truc tiep theo tung nen tang:

```bash
npm run android
npm run ios
npm run web
```

## Tinh nang hien tai

- Tab `Home`: co 2 nut `Store Data` va `Get Data` de test AsyncStorage.
- Tab `Details`: hien thi danh sach item bang FlatList.

## Cau truc chinh

- `app/_layout.tsx`: cau hinh layout/router goc.
- `app/index.tsx`: man hinh chinh, bottom tabs va AsyncStorage demo.
- `components/DetailList.tsx`: component hien thi danh sach bang FlatList.
- `components/HomeTabView.tsx`: component mau dung `react-native-tab-view`.
- `app.json`: cau hinh Expo.
- `package.json`: scripts va dependencies.

## Kiem tra

Kiem tra lint:

```bash
npm run lint
```

Kiem tra TypeScript:

```bash
npx tsc --noEmit
```

Kiem tra package Expo:

```bash
npx expo install --check
```
