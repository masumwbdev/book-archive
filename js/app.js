
document.getElementById('no-found-message').style.display = 'none';
const searchButton = () => {
    const searchInput = document.getElementById('search-input');
    const searchField = searchInput.value;
    // console.log(searchField);
    searchInput.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchField}`
    document.getElementById('no-found-message').style.display = 'none';
    if(searchField == ''){
        alert('Invalid')
    }
    else{
    fetch(url)
    .then(res => res.json())
    .then(data => displayBookResults(data.docs))
    .catch(error => displayError(error))
    }
}

const displayError = () => {
  document.getElementById('no-found-message').style.display = 'none';
}
document.getElementById('no-found-message').style.display = 'none';
const displayBookResults = books => {
    // console.log(books)
    const bookDetails = document.getElementById('book-details');
    bookDetails.textContent = '';
    if(books.length == 0){
      document.getElementById('no-found-message').style.display = 'block';
    }
    books.forEach(book => {
        // console.log(book.author_name[0])
        console.log(book)
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <img class="cover-image" src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg
        ">
        <div class="card-body">
          <h5 class="card-title text-danger">${book.title}</h5>
          <h6>${book.author_name[0]}</h6>
          <p>${book.publisher[0]}</p>
          <p>${book.publish_year[0]}</p>
        </div>
      </div>
        `
        bookDetails.appendChild(div);
    })
};