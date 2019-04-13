# 🤠 Avatar

Avatar control enables users to add images, icons or initials
within any application for instances such as a profile pictures.

## Usage

```jsx
<Avatar type="image" image={{ uri: 'https://picsum.photos/200' }} />
```

## Screenshots

Add screenshots here

## Supported Props

> Legend
> ✅ = Fully Compatible and works as intended
> ⚠️ = Partially compatible
> ❌ = Not compatible

|  Prop | Compatible |           Comments           |
| :---: | :--------: | :--------------------------: |
|  type |     ️⚠️    | Only works with `image` type |
|  size |     ❌ ️    |                              |
| color |     ❌ ️    |                              |
|  icon |     ❌ ️    |                              |
| image |     ❌ ️    |                              |
|  text |     ❌ ️    |                              |
| style |     ❌ ️    |                              |

## User Stories

|                              Story                              | In Storybook | Has Unit Test |
| :-------------------------------------------------------------: | :----------: | :-----------: |
|  User should be able to use Image Avatar by setting image path  |       ✅      |       ✅       |
| User should be able to use Image Avatar importing image in code |       ❌      |       ❌       |
