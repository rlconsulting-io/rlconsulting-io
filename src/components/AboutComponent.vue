<template>
    <div class="section pt-4 px-3 px-lg-4" id="about">
        <div class="container-narrow">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="h4 my-2">Hi! My name is {{ data.firstName }}.</h2>
                    <p>{{ data.bio1 }}</p>
                    <p>{{ data.bio2 }}</p>
                    <p>{{ data.bio3 }}</p>
                    <div class="row mt-3">

                        <div class="col-sm-2">
                            <div class="pb-1">Email:</div>
                        </div>
                        <div class="col-sm-10">
                            <div class="pb-1 fw-bolder"><a class="textDecorationNone" :href="`mailto:${data.email}`">{{
                                    data.email
                            }}</a></div>
                        </div>
                        <div class="col-sm-2">
                            <div class="pb-1">Phone:</div>
                        </div>
                        <div class="col-sm-10">
                            <div class="pb-1 fw-bolder"><a class="textDecorationNone" :href="`tel:${data.phone}`">{{
                                    data.phone
                            }}</a></div>
                        </div>
                        <div class="col-sm-2">
                            <div class="pb-1">Location:</div>
                        </div>
                        <div class="col-sm-10">
                            <div class="pb-1 fw-bolder">QC, Canada</div>
                        </div>
                        <div class="col-sm-2">
                            <div class="pb-1">Staus:</div>
                        </div>
                        <div class="col-sm-10">
                            <div class="pb-1 fw-bolder">Available</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 offset-md-1" data-aos="fade-left" data-aos-delay="100"><img
                        class="avatar img-fluid mt-2" src="@/assets/images/avatar.jpg" width="400" height="400"
                        alt="Régis Tremblay Lefrançois" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AboutComponent',
    props: ['data']

}
</script>
<style scoped>
.textDecorationNone {
    text-decoration: none;
}
</style>