


// module.exports.show = (req, res, next) => {
//     db.starter-code.find({},{name:1, _id:0})// revisar el nombre de la db
 
// }
  

// router.get('/celebrities', (req, res, next) => {
//     res.render('celebrities');
//     db.employees.find({},{name:1, _id:0})// revisar el nombre de la db
//   });



// module.exports.doCreate = (req, res, next) => {
//     const book = new Book(req.body)
  
//     book.save()
//       .then(() => res.redirect(`/books/${book._id}`))
//       .catch((error) => {
//         if (error instanceof mongoose.Error.ValidationError) {
//           res.render('books/form', {
//             book,
//             categories: BOOK_CATEGORIES,
//             ...error
//           })
//         } else {
//           next(error)
//         }
//       });
//   }