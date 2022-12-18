// Set up declarations to require express and call on the database.
// From there we set up a get function to connect with all the notes created on our API. 
const router = require('express').Router();
const store = require('../db/store')

router.get('notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })

// If there is no match with the request, it will present the user with a 500 error. 
        .catch((err) => res.status(500).json(err));
});

// POST allows the user to save their notes into the database. They are also able to retrieve their notes. 
router.post('./notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
});

// Lastly, user is able to delete their notes using this delete function. Code below searches for matching note information, id, and deletes as needed. 
// If no id match is found, the user will be presented with an error. 
router.delete('/notes/:id', (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true}))
        .catch((err) => res.status(500).json(err));
});

module.expoerts = router;