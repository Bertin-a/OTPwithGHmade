
//using mailosaur
const serverID = 'y7cffopc'
const testemail = 'today-carryf@y7cffopc.mailosaur.net'
describe('template spec', () => {
  it('logs in and retrieves OTP code via email', () => {
    // Login
    cy.visit('https://ghmade.com/auth/signup')
    cy.get('#InputEmail').type(testemail)
    cy.get('#InputPassword1').type('1508DaddY')
    cy.get('#InputPassword2').type('1508DaddY')
    cy.get('#individual').click()
    cy.get('#signup_button').click()
    

    cy.mailosaurGetMessage(serverID,{
      sentTo: testemail
    }).then(email=>{
      cy.wait(10000)
      if(email){

        console.log({email})
      }
    })



    // Wait for OTP email to arrive in Mailtrap inbox
    // cy.task('retrieveOTPCodeFromEmail').then((otpCode) => {
    //   // Enter OTP code into application
    //   cy.get('#otp-input').type(otpCode)
    //   cy.get('#verify-button').click()
    //   // Assert that the user is logged in successfully
    //   cy.url().should('eq', 'https://github.com/')
    })
  })
