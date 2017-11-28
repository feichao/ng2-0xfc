import { environment } from '../environments/environment';

const baseUrl = environment.server;

const Constant_ = {
  URL: {
    art: baseUrl + 'json/articles/category',
    story: baseUrl + 'json/storys/category',
    hole: baseUrl + 'json/hole',
    post: baseUrl + 'json/article/',
    about: baseUrl + 'json/about'
  }
};

export let Constant = Constant_;
