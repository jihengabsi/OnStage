package com.example.onstage.postList

import android.content.Intent
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.onstage.R
import com.example.onstage.DetailActivity
import com.example.onstage.data.*

class NormalPostAdapter( val postsList: MutableList<Post>) : RecyclerView.Adapter<PostViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PostViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.normalpost_singleitem, parent, false)

        return PostViewHolder(view)
    }

    override fun onBindViewHolder(holder: PostViewHolder, position: Int) {

        val name = postsList[position].postName
        val role = postsList[position].postRole

        holder.postPic.setImageResource(postsList[position].postPic)
        holder.postName.text = name
        holder.postRole.text = role

        holder.itemView.setOnClickListener{
            val intent = Intent(holder.itemView.context, DetailActivity::class.java)
            intent.apply {
                putExtra(PICTURE, postsList[position].postPic)
                putExtra(NAME, name)
                putExtra(ROLE, role)
            }
            holder.itemView.context.startActivity(intent)
        }

    }

    override fun getItemCount() = postsList.size

}