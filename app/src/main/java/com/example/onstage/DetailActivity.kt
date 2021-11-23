package com.example.onstage

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import com.example.onstage.data.*
import com.example.onstage.R

class DetailActivity : AppCompatActivity() {

    lateinit var postPic : ImageView
    lateinit var postName : TextView
    lateinit var postRole : TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detail)


        postPic = findViewById(R.id.postPic)
        postName = findViewById(R.id.postName)
        postRole = findViewById(R.id.postRole)

        postPic.setImageResource(intent.getIntExtra(PICTURE, 0))

        val name = intent.getStringExtra(NAME)
        val role = intent.getStringExtra(ROLE)

        title= "$name Detail"

        postName.text = "$name"
        postRole.text = "$role"

    }
}