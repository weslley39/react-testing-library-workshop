const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time)
  })

async function savePost(postData) {
  await sleep(1000)
  return {data: {post: postData}}
}

export {savePost}
