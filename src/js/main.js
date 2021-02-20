var browser = chrome || browser;
import list from './list.js'

const filter = {
  urls: list
}

const webRequestFlags = [
  'blocking',
];

export default () => {
  browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {cancel: true};
  },
  filter,
  webRequestFlags
  );
}