if (idx >= ARY_CAPA(ary)) {
    long new_capa = ARY_CAPA(ary) / 2;

    if (new_capa < ARY_DEFAULT_SIZE) {
        new_capa = ARY_DEFAULT_SIZE;
    }
    if (new_capa >= ARY_MAX_SIZE - idx) {
        new_capa = (ARY_MAX_SIZE - idx) / 2;
    }
    new_capa += idx;
    ary_resize_capa(ary, new_capa);
}
