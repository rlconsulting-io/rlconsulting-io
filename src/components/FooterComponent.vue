<template>
    <footer class="pt-4 pb-4 text-center bg-light">
        <div class="container">
            <div class="my-3">
                <div class="h4">Régis Tremblay Lefrançois</div>
                <p>{{ data.title }}</p>
                <div class="social-nav">
                    <nav role="navigation">
                        <ul class="nav justify-content-center">

                            <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/regis.lefrancois"
                                    title="Facebook"><i class="fab fa-facebook"></i><span
                                        class="menu-title sr-only">Facebook</span></a>
                            </li>

                            <li class="nav-item"><a class="nav-link" href="https://www.linkedin.com/in/registremblay/"
                                    title="LinkedIn"><i class="fab fa-linkedin"></i><span
                                        class="menu-title sr-only">LinkedIn</span></a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
            <div class="text-small text-secondary">
                <div class="mb-1">&copy; Super Folio. All rights reserved.</div>
                <div>
                    <!-- Make sure to buy a license for the template before removing the line below. Buy license on https://templateflip.com/ -->Design
                    - <a href="https://templateflip.com/" target="_blank">TemplateFlip</a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'FooterComponent',
    props: ['data']
}
</script>