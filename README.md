# Movie Search App

## Motivation

I have been looking for project ideas for a while and I stumbled across the github repo [App Ideas Github](https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Movie-App.md) and decided to build it.

## User Stories

- [ ] User can see all the latest movie on the front page
- [ ] User scroll down to see all other movies according to release date
- [ ] User can click on any of the movie to go to their own separate page
- [ ] User can then see all about the movie ratings, about, actors present on each separate movie page
- [ ] User can create their own watch list

## Additional Features in mind

- [ ] Slider of Movies at Home
- [ ] Pagination or Infinite Scrolling
- [ ] Skeleton Screens
- [ ] Lazy Loading
- [ ] Multi word search separated by a comma or a white-space

## Framework and Libraries used

- Vite
- React Router
- React Query
- Fontawesome
- Axios

## Design

- I have always been a big fan of minimalistic design. I designed layout, buttons, search bars after [Youtube](https://youtube.com/), [Watchapedia](https://pedia.watcha.com/), [Material UI](https://mui.com/).

## My Journey

### Building small components first

- In my previous projects, I always built navbar first, but without knowing what features and links are going to be in the final project, it was not reasonable. It often ended with frustrations because I would spend a lot of time building shells, not features. When it became time to implement features, I was already exhausted. This time, I focused on building components with full features first, then I put them together. By implementing small features in the beginning, I felt like I was actually getting work done and progressing fast.

### React Query and pagination

- I have never done the paginations in the past. The standard way of doing it seems to be storing page as a state from what I have seen in Youtube. However, the major drawback to this approach is that you need to sync URL params with your state. Otherwise, the user can't go to certain page by typing in URL. This is one of the things I do not like about lazy loading or some poorly built SPA. I implemented pagination by providing page number from params and useQuery to load a new page.

### Extracting API data formatting logic outside of components

## Resources

- [MovieDB Api](https://developers.themoviedb.org/3)

## Similar Projects for References

[Movie Database App w/ React by Oliver Gomes](http://phobic-heat.surge.sh/)  
[Movie Browser App w/ React&Redux&Bootstrap by Nataliia Pylypenko](https://api-cinema-10d15.firebaseapp.com/)
