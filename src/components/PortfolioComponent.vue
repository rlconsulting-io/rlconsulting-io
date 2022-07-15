<template>
    <div class="section px-2 px-lg-4 pt-5" id="portfolio">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="marker marker-center">Portfolio </h2>
            </div>
            <div class="grid bp-gallery pb-3" data-aos="zoom-in-up" data-aos-delay="100">
                <div class="grid-sizer"></div>
                <div class="grid-item"><a href="https://www.proofpoint.com/us/customer-stories/Agri-Marche">
                        <figure class="portfolio-item"><img src="@/assets/images/portfolio/pp-small.png"
                                data-bp="@/images/portfolio/pp.png" />
                            <figcaption>
                                <h4 class="h5 mb-0">Email Security</h4>
                                <div>Dribbble.com</div>
                            </figcaption>
                        </figure>
                    </a></div>
                <div class="grid-item"><a href="https://pypi.org/project/psat-result-api/">
                        <figure class="portfolio-item"><img src="@/assets/images/portfolio/etl-small.png"
                                data-bp="@/assets/images/portfolio/etl.png"
                                data-caption="Example of an optional caption." />
                            <figcaption>
                                <h4 class="h5 mb-0">ETL</h4>
                                <div>psat-result-api</div>
                            </figcaption>
                        </figure>
                    </a></div>

                <div class="grid-item"><a href="https://pypi.org/project/kimoby/">
                        <figure class="portfolio-item"><img src="@/assets/images/portfolio/kimoby-small.png"
                                data-bp="@/assets/images/portfolio/kimoby.png"
                                data-caption="Example of an optional caption." />
                            <figcaption>
                                <h4 class="h5 mb-0">Middleware</h4>
                                <div>kimoby</div>
                            </figcaption>
                        </figure>
                    </a></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PortfolioComponent'
}
</script>