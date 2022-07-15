<template>
    <div class="section px-3 px-lg-4 pt-5" id="services">
        <div class="container-narrow">
            <div class="text-center mb-5">
                <h2 class="marker marker-center">My Services</h2>
            </div>
            <div class="text-center">
                <p class="mx-auto mb-3" style="max-width:600px"> I offer services adapted to any type of business.
                    Whether
                    in finance, construction or agriculture. </p>
            </div>
            <div class="row py-3">
                <div class="col-md-3 text-center" data-aos="fade-up" data-aos-delay="100"><img class="mb-2"
                        src="@/assets/images/services/web-design.svg" width="96" height="96" alt="web design" />
                    <div class="h5">Backend Design</div>
                </div>
                <div class="col-md-3 text-center" data-aos="fade-up" data-aos-delay="200"><img class="mb-2"
                        src="@/assets/images/services/graphic-design.svg" width="96" height="96" alt="graphic design" />
                    <div class="h5">Systems Architecture</div>
                </div>
                <div class="col-md-3 text-center" data-aos="fade-up" data-aos-delay="300"><img class="mb-2"
                        src="@/assets/images/services/ui-ux.svg" width="96" height="96" alt="ui-ux" />
                    <div class="h5">Project Management</div>
                </div>
                <div class="col-md-3 text-center" data-aos="fade-up" data-aos-delay="400"><img class="mb-2"
                        src="@/assets/images/services/app-development.svg" width="96" height="96"
                        alt="app development" />
                    <div class="h5">Collaboration Tools</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ServicesComponent'
}
</script>