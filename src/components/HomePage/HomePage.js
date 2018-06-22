import React, { Component } from 'react';

class HomePage extends Component {
    
    render() {
        return (
            
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              
              <div class="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  <strong>Welcome to Home Page</strong> Login successful
              </div>
              
              <button type="button" class="btn btn-primary">Logout</button>
              
                
            </div>
            
        )
    }
} 
export default HomePage;