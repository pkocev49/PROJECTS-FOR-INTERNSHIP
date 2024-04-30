<template>

    <div>
        <slot></slot>
    </div>




</template>

<style scoped>
div {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 20px;
    width: 280px;
    animation: slideFromTop 0.5s ease forwards;
    opacity: 0;
    transform: translateY(-100%);


}

@media only screen and (min-width: 600px) {
    div {
        width: 400px;
    }
}

@media only screen and (min-width: 725px) {
    div {
        width: 500px;
    }
}



@keyframes slideFromTop {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
