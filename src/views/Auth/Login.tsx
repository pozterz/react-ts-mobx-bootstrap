import * as React from 'react'
import { Card, Button, CardBody, Form, FormGroup, Input, InputGroup } from 'reactstrap'
import { observer, inject } from 'mobx-react'
import './Login.css'
import { login, setUser } from '../../actions/auth'

@inject('users', 'routing')
@observer
export class Login extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    e.preventDefault()
    if (e) {
      const {
        target: { value, name }
      } = e
      this.setState((state, props) => ({
        [name]: value
      }))
    }
  }

  handleLogin = async e => {
    e.preventDefault()
    const { username, password } = this.state
    const { routing } = this.props

    try {
      const result = await login({ username, password })
      setUser({
        name: 'pozterz',
        token: 'xD'
      })
      console.log('result', result)
    } catch (err) {
      console.log('err', err)
      setUser({
        name: 'pozterz',
        token: 'xD'
      })
      routing.push('home')
    }
  }

  render() {
    const { username, password } = this.state
    const { users, routing } = this.props
    console.log(users, routing)

    return (
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-center mvh">
          <Card className="text-center w-400" outline color="primary">
            <CardBody className="w-100 p-4">
              <div className="card-block" />
              {users.isFetching ? 'Loading' : ''}
              <div className="form">
                <Form>
                  <FormGroup className="my-3">
                    <InputGroup>
                      <Input
                        type="text"
                        className="input"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="my-3">
                    <InputGroup>
                      <Input
                        type="password"
                        className="input"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mt-3 mb-0">
                    <Button color="primary" type="submit" block className="py-2" onClick={this.handleLogin}>
                      Login
                    </Button>
                  </FormGroup>
                </Form>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    )
  }
}

export default Login
