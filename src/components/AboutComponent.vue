<template>
    <div class="section pt-4 px-3 px-lg-4" id="about">
        <div class="container-narrow">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="h4 my-2">Hi! My name is Régis.</h2>
                    <p>When Bill Gates said, "I will always choose a lazy person to do a difficult job because a lazy
                        person
                        will find an easy way to do it.", he was talking about me. I WILL find the ultimate easiest way
                        to do
                        pretty much anything. It's kind of my superpower.</p>
                    <p>I got my first taste of IT when I built my first PC at 12 solely to play Counter-Strike 1.3 a
                        mild 7
                        hours a day. The next project was to annoy my mother enough so that she finally upgraded our
                        internet
                        connection to lower my ping and download faster on Napster. I was a good project manager back
                        then, and
                        it's still the case today.</p>
                    <p>If you are wondering why I do not have a ton of certifications attached to my profile, it's
                        because I'm
                        a self-learner, and, to me, the certification industry looks more like a scam than anything
                        else. I
                        don't need the 7 days of training taught by someone with no reel world experience in a
                        windowless room
                        surrounded by guys/girls 2 times my age that keep asking dumb questions. Just give me a good
                        internet
                        connection and some time, and I can teach myself anything you need.</p>




                    <div class="row mt-3">
                        <div class="col-sm-2">
                            <div class="pb-1">Age:</div>
                        </div>
                        <div class="col-sm-10">
                            <div class="pb-1 fw-bolder">{{ calculateAge }}</div>
                        </div>
                        <div class="col-sm-2">
                            <div class="pb-1">Email:</div>
                        </div>
                        <div class="col-sm-10">
                            <div class="pb-1 fw-bolder">rtlefrancois@rlconsulting.io</div>
                        </div>
                        <div class="col-sm-2">
                            <div class="pb-1">Phone:</div>
                        </div>
                        <div class="col-sm-10">
                            <div class="pb-1 fw-bolder">+1-418-573-5218</div>
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
    computed: {
        calculateAge: function () {
            let currentDate = new Date();
            let birthDate = new Date("1989/01/01");
            let difference = currentDate - birthDate;
            let age = Math.floor(difference / 31557600000);
            return age
        }
    }

}
</script>