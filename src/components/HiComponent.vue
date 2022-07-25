<template>
    <header>
        <div class="cover bg-light">
            <div class="container px-3">
                <div class="row">
                    <div class="col-lg-6 p-2"><img class="img-fluid" src="@/assets/images/illustrations/hello3.svg"
                            alt="hello" />
                    </div>
                    <div class="col-lg-6">
                        <div class="mt-5">
                            <p class="lead text-uppercase mb-1">Hi!</p>
                            <h1 class="intro-title marker" data-aos="fade-left" data-aos-delay="50">My name is
                                {{ data.firstName }}
                            </h1><br />
                            <p class="lead fw-normal mt-3" data-aos="fade-up" data-aos-delay="100">{{ data.title }}</p>
                            <div class="social-nav" data-aos="fade-up" data-aos-delay="200">
                                <nav role="navigation">
                                    <ul class="nav justify-content-left">
                                        <li class="nav-item"><a class="nav-link"
                                                href="https://www.facebook.com/regis.lefrancois" title="Facebook"><i
                                                    class="fab fa-facebook"></i><span
                                                    class="menu-title sr-only">Facebook</span></a></li>
                                        <li class="nav-item"><a class="nav-link"
                                                href="https://www.linkedin.com/in/registremblay/" title="LinkedIn"><i
                                                    class="fab fa-linkedin"></i><span
                                                    class="menu-title sr-only">LinkedIn</span></a></li>

                                    </ul>
                                </nav>
                            </div>
                            <div class="mt-3" data-aos="fade-up" data-aos-delay="200"><a
                                    class="btn btn-primary shadow-sm mt-1 hover-effect" href="/Resume-RTL.pdf">Download
                                    my Resume
                                    <i class="fas fa-arrow-right"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wave-bg"></div>
    </header>
</template>
<script>
export default {
    name: 'HiComponent',
    props: ['data']
}
</script>