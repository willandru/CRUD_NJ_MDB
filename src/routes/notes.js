const router = require('express').Router(); // Crear un objeto para facilitarme la creacion de rutas

const Note = require('../models/Note');


router.get('/notes/add', (req, res) =>{
    res.render('notes/new-note')
});

router.post('/notes/new-note', async (req, res) =>{
    const{title, description}= req.body;

    const errors = [];
    if(!title){
        errors.push({text: 'Please Write a Title'});
    }
    if(!description){
        errors.push({text: 'Please Write a Description'});
    }

    if(errors.length>0){
        res.render('notes/new-note',{
            errors,
            title,
            description
        })
    }else{
        const newNote= new Note({title, description});
        console.log(newNote);
        await newNote.save();

        req.flash('success_msg', 'Note Aded Successfully');

        res.redirect('/notes');
    }

    
});



router.get('/notes', async (req, res) => {
   const notes= await  Note.find().sort({date: 'desc'});
   res.render('notes/all-notes', {notes});

});


router.get('/notes/edit/:id' , async (req, res) =>{
        const note= await Note.findById(req.params.id);
    res.render('notes/edit-note', {note})
    console.log("Hola")
})

router.put('/notes/edit-note/:id', async (req, res) =>{
    const {title, description} = req.body;
    console.log(title)
    console.log(description)
    await Note.findByIdAndUpdate(req.params.id, { title, description});
    req.flash('success_msg', 'Note UPDATED successfully');
    res.redirect('/notes');
});

router.delete('/notes/delete/:id' , async (req,res) =>{
    /* console.log(req.params.id)
    res.send("Ok"); */
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note DELETED successfully');

    res.redirect('/notes');
});

module.exports = router;