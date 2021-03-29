import {expect, test} from '@oclif/test'

describe('mailchimp:subscriberHash', () => {
  test
  .stdout()
  .command(['mailchimp:subscriberHash'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['mailchimp:subscriberHash', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
