<script>
export default {
    name: "ProducCard",
    props: {
        singleProduct: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            base_url: 'http://127.0.0.1:8000',
        };
    },
    mounted() {
        var modalId = document.getElementById('modalId');

        modalId.addEventListener('show.bs.modal', function (event) {
            // Button that triggered the modal
            let button = event.relatedTarget;
            // Extract info from data-bs-* attributes
            let recipient = button.getAttribute('data-bs-whatever');

            // Use above variables to manipulate the DOM
        });
    }
};
</script>

<template>

    <div class="card p-0 m-0">
        <div class="img-container ratio ratio-4x3 p-0 m-0">
            <template v-if="singleProduct.image_path.startsWith('http')">
                <img :src="singleProduct.image_path" class="card-img-top p-0 m-0" :alt="singleProduct.name">
            </template>
            <template v-else>
                <img :src="base_url + '/storage/' + singleProduct.image_path" class="card-img-top"
                    :alt="singleProduct.name">
            </template>
        </div>

        <div class="card-body text-center fw-bold">
            <p>{{ singleProduct.name }}</p>
            <div class="">
                <p v-if="singleProduct.ingredients" class="text-center fw-bold m-0" style="font-size: 14px;">INGREDIENTI
                </p>
                <p v-if="singleProduct.ingredients" style="height: 3.2rem; font-size: 12px;" class="overflow-auto">{{
                    singleProduct.ingredients }}</p>
            </div>

            <div class="card-footer">
                <div class="row justify-content-between align-items-center flex-column flex-sm-row">
                    <div class="col-sm-12 col-md-8 text-center text-md-end">
                        <p class="m-0 pe-sm-0 pe-md-2">{{ singleProduct.price }}€</p>
                    </div>
                    <div class="col-sm-12 col-md-3">
                        <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal"
                            :data-bs-target="'#' + singleProduct.id"><i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>



    <!-- Modal -->
    <div class="modal fade" :id="singleProduct.id" tabindex="-1" role="dialog" aria-labelledby="modalTitleId"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitleId">
                        Aggiungere {{ singleProduct.name }} al carrello
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-4">
                            <template v-if="singleProduct.image_path.startsWith('http')">
                                <img :src="singleProduct.image_path" class="img-fluid" :alt="singleProduct.name">
                            </template>
                            <template v-else>
                                <img :src="base_url + '/storage/' + singleProduct.image_path" class="img-fluid"
                                    :alt="singleProduct.name">
                            </template>
                        </div>
                        <div class="col-6 ">
                            <p><span class="fw-bold">Prezzo : </span>{{ singleProduct.price }}€</p>
                            <div class="d-flex align-items-center justify-content-start gap-2">
                                <i class="fa-solid fa-minus p-2 bg-warning rounded-circle"></i>
                                <span class="fs-3">123</span>
                                <i class="fa-solid fa-plus p-2 bg-warning rounded-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning"><i
                            class="fs-5 text-white fa-solid fa-cart-plus me-2"></i>
                        0.00 €</button>
                </div>
            </div>
        </div>
    </div>



</template>

<style scoped>
.on-element {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    transition: 0.3s ease;
    color: #FFFFFF00;
    background: #ffffffce;
    background: none;
}

.img-container:hover .on-element {
    background: #ffffffce;
    color: #434959;
}
</style>
