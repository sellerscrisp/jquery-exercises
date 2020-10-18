// gets input from movies form
$('.movies').on('submit', function (e) {
  e.preventDefault();

  let title = $('#title').val();
  let rating = $('#rate').val();

  // testing
  console.log(
    'got movie from form => \n' +
      ' movie title: ' +
      title +
      ' movie rating: ' +
      rating
  );

  let movieInfo = { title, rating };
  let dataToHTML = addMovie(movieInfo);

  $('.movie-body').append(dataToHTML);
});

// remove button
$('.movie-body').on('click', '.btn.btn-danger', function (e) {
  $(e.target).closest('tr').remove();
});

// add input vals to table html element
function addMovie(input) {
  // testing
  console.log(`Added "${input.title}" with a rating of ${input.rating}`);
  return `<tr>
            <th scope="row">
              ${input.title}
            </th>
            <td>
              ${input.rating}
            </td>
          <td>
          <button type="button" class="btn btn-danger"><i class="fas fa-backspace" aria-hidden="false"></i></button>
          </td>
          </tr>`;
}
