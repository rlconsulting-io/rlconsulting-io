<template>
    <header class="bg-light">
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="header-nav" role="navigation">
            <div class="container">
                <img class="logo-rl" src="@/assets/images/RlConsulting-stacked.png" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"><span
                        class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto me-2">
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#experience">Experience</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'NavbarComponent'
}</script>
<style scoped>
.logo-rl {
    width: 250px;

    margin-left: 50px;

}
</style>