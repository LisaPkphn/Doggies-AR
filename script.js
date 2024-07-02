window.downloadPDF = function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const images = [
        'assets/dog_1/scene.gltf',
        'assets/dog_2/scene.gltf',
        'assets/dog_3/scene.gltf',
        'assets/dog_4/scene.gltf',
        'assets/dog_5/scene.gltf',
        'assets/dog_6/scene.gltf',
        'assets/dog_7/scene.gltf',
        'assets/dog_8/scene.gltf',
        'assets/dog_9/scene.gltf',
        'assets/dog_10/scene.gltf'
    ];

    let yOffset = 10;

    images.forEach((imageSrc, index) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            if (index > 0) {
                yOffset += 80; // Adjust the space between images
            }
            doc.addImage(img, 'PNG', 10, yOffset, 180, 60); // Adjust the size and position as needed
            if (index === images.length - 1) {
                doc.save('Doggies-AR.pdf');
            }
        };
    });
};
