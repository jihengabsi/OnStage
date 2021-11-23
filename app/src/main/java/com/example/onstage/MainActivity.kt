package com.example.onstage

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.onstage.data.Post
import com.example.onstage.postList.PostAdapter
import android.content.Intent
import android.view.View


class MainActivity : AppCompatActivity() {

    val firstfragment=firstPage()
    val test=NewsPage()

    lateinit var recylcerPost: RecyclerView
    lateinit var recylcerPostAdapter: PostAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        supportFragmentManager.beginTransaction().apply {
            replace(R.id.flFragment,firstfragment)
            commit()

        }

    }

    fun go(view: android.view.View) {
        val fragmentveriopt=MobileNum()
        val transaction = supportFragmentManager.beginTransaction()
        transaction.replace(R.id.flFragment, fragmentveriopt)
        //addToBackStack(null)
        transaction.commit()
    }
    fun gotoverifopt(view: android.view.View) {
        val fragmentverifopt=VerifOPT()
        val transaction = supportFragmentManager.beginTransaction()
        transaction.replace(R.id.flFragment,fragmentverifopt)
        transaction.commit()
    }
    fun verifOPT(view: android.view.View) {
        val fragmentsetusr=SetUsername()
        val transaction = supportFragmentManager.beginTransaction()
        transaction.replace(R.id.flFragment, fragmentsetusr)
        transaction.commit()
    }
    fun homePage(view: View) {
        val intent = Intent(this, HomePageActivity::class.java)
        // start your next activity
        startActivity(intent)
    }

}