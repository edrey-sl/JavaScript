<script>
        const software = document.getElementById('respaldo_soft');
        software.addEventListener( 'change', function() {
            if(software.checked) {
              software.value = 1;
            }else{
                 software.value = 0;
            }
    });
        
    
</script>