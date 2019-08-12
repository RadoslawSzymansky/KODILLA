export default (content, maxLength) => {

  if (maxLength < 1) return 'maxLength must be bigger than 0';

  if (content.length <= maxLength ) return content;

  let cutText = '';
  let word = '';

  for (let i = 0; i < maxLength; i++) {

    if (content[i] !== ' ') word += content[i];
    
    if (content[i] === ' ') {
      cutText += ' ' + word;
      word = '';
    };
    
    if ( i === maxLength -1 ) {

      if (content[i] === ' ') {
        return cutText += ' ...';
      };

      if (content[i] === word.slice(-1)) {
        return cutText += ' ' + word + '...';
      };

      cutText += '...';

    };
  };

  return cutText;
};