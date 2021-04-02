<template>
  <div>
    <div class="container">
    <header class="app-header">
        <div class="row">
            <div class="col-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="#">Welcome to our site</a>
                  <a class="" href="#">Sign in</a>

                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item"><a class="nav-link"><i class="fas fa-globe-asia"></i> Uz</a></li>
                  </ul>

                </nav>
            </div>
        </div>
        
        <div class="row">
            <div class="col-12">
                <nav class="navbar navbar-expand-lg navbar-light">
                  <a class="navbar-brand col-sm-3" href="#">
                    <img src="img/logo.png" width="30" height="30" alt=""> Store MARKET N
                  </a>
                    
                    <form action="" class="search">
                        <div class="input-group ml-5">
                            <div class="input-group-prepend bg-light">
                                <button class="btn btn-warning dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All</button>
                                <div class="dropdown-menu">
                                  <a class="dropdown-item" href="#">Category One</a>
                                  <a class="dropdown-item" href="#">Category Two</a>
                                  <a class="dropdown-item" href="#">Category Three</a>
                                  <div role="separator" class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Separated Category</a>
                                </div>
                            </div>
                            <input type="text" class="form-control" aria-label="Search input with dropdown button">
                            <div class="input-group-append">
                                <button class="btn btn-warning" type="button"> <i class="fa fa-search"></i> </button>
                            </div>
                        </div>
                    </form>
                    
                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item"><a class="nav-link"><i class="fas fa-shopping-cart"></i><span class="badge badge-secondary">2</span></a></li>
                    <li class="nav-item"><a class="nav-link">My cart: <span class="text-danger">12.50$</span></a></li>
                  </ul>
                </nav>
                
                
            </div>
        </div>
    </header>
    <Nuxt/>
    <footer class="row bg-light">
        <div class="col-3">
            <ul class="nav flex-column float-right">
                  <li class="">
                    <a class="" href="#">Link</a>
                  </li>
                  <li class="">
                    <a class="" href="#">Link</a>
                  </li>
                <li class="">
                    <a class="" href="#">Link</a>
                  </li>
                <li class="">
                    <a class="" href="#">Link</a>
                  </li>
            </ul>
        </div>
        <div class="col-3">
        
            <ul class="nav flex-column float-right">
                  <li class="">
                    <a class="" href="#">Link</a>
                  </li>
                  <li class="">
                    <a class="" href="#">Link</a>
                  </li>
                <li class="">
                    <a class="" href="#">Link</a>
                  </li>
                <li class="">
                    <a class="" href="#">Link</a>
                  </li>
            </ul>
        </div>
        <div class="col-3">
        <ul class="nav flex-column float-right">
                  <li class="">
                    <a class="" href="#">Link</a>
                  </li>
                  <li class="">
                    <a class="" href="#">Link</a>
                  </li>
                <li class="">
                    <a class="" href="#">Link</a>
                  </li>
                <li class="">
                    <a class="" href="#">Link</a>
                  </li>
            </ul>
        
        </div>
    </footer>
        
    </div>
  </div>
</template>

