import contentful from 'contentful-management'
import * as dotenv from 'dotenv'

dotenv.config()

const { CMA_TOKEN, SPACE_ID, MASTODON_TOKEN, MASTODON_URL } = process.env

const endpoint = `${MASTODON_URL}/api/v1/statuses?access_token=${MASTODON_TOKEN}`

const client = contentful.createClient({
  accessToken: CMA_TOKEN,
})

// Create webhook
client
  .getSpace(SPACE_ID)
  .then((space) => {
    return space.createWebhook({
      name: 'Post to Mastodon',
      url: endpoint,
      topics: ['Entry.publish'],
      filters: [
        {
          in: [
            {
              doc: 'sys.environment.sys.id',
            },
            ['master'],
          ],
        },
      ],
      transformation: {
        contentType: 'application/json',
        // body: '', // the "body" property is for custom payload, see the blog post for an example
      },
    })
  })
  .then((webhook) => console.log(webhook))
  .catch(console.error)
