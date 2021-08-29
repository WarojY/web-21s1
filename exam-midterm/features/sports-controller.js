const { db } = require('../_services/firebase-admin-initialized')

const sportCreateForm = async (req, res) => {
  res.render('sport-create-form')
}

const sportList = async (req, res) => {
  const query = db.collection('sports').orderBy('name').get()

  const sportList = (await query).docs.map(doc => doc.data())
  res.render('sport-list', { sportList })
}

const sportDetails = async (req, res) => {
  const slug = req.params.slug

  const query = db.collection('sports').doc(slug).get()

  const sportDetails = (await query).data()
  res.render('sport-details', { sportDetails })
}

const sportSchedule = async (req, res) => {
  const slug = req.params.slug

  const query = db.collection('events').where('sportSlug', '==', slug).get()

  const sportSchedule = (await query).docs.map(doc => doc.data())
  res.render('sport-schedule', { sportSchedule })
}

const sportCreateByForm = async (req, res) => {
  const { slug, name, description, eventCount } = req.body
  const data = { slug, name, description, eventCount }

  const query = db.collection('sports').doc(slug).set(data, { merge: true })

  await query
  res.redirect(`/sports/${slug}`)
}

module.exports = {
  sportCreateForm,
  sportList,
  sportDetails,
  sportSchedule,
  sportCreateByForm
}
