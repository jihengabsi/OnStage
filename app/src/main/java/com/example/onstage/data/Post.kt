package com.example.onstage.data

import androidx.annotation.DrawableRes

const val PICTURE = "PICTURE"
const val NAME = "NAME"
const val ROLE = "ROLE"

data class Post(

    @DrawableRes
    val postPic: Int,

    val postName: String,

    val postRole: String
)